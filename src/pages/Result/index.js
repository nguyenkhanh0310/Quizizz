import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnswer } from "../../services/answersService";
import { getListQuestion } from "../../services/questionsService";
import "./Result.scss";

function Result() {
  const params = useParams();
  const [dataResult, setDataResult] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const dataAnswers = await getAnswer(params.id);
      const dataQuestions = await getListQuestion(dataAnswers.topicId);

      let resultFinal = [];

      for (let i = 0; i < dataQuestions.length; i++) {
        resultFinal.push({
          ...dataQuestions[i],
          ...dataAnswers.answers.find(item => item.questionId === parseInt(dataQuestions[i].id))
        });
      }
      setDataResult(resultFinal);
    }
    fetchApi();
  }, []);

  return (
    <>
      <h1>Kết quả: </h1>
      <div className="answer__list">
        {dataResult.map((item, index) => (
          <div className="answer__item" key={item.id}>
            <div className="form-quiz__item" key={item.id}>
              <p>
                Câu {index + 1}: {item.question}
                {item.correctAnswer === item.answer ? (
                  <span className="result__tag result__tag--true">Đúng</span>
                ) : (
                  <span className="result__tag result__tag--false">Sai</span>
                )}
              </p>
              {item.answers.map((itemAns, indexAns) => {
                let className = "";
                let checked = false;

                if(item.answer === indexAns) {
                  checked = true;
                  className = "result__item--selected";
                }

                if(item.correctAnswer === indexAns) {
                  className += " result__item--result";
                }

                return (
                  <div className="form-quiz__answer" key={indexAns}>
                    <input type="radio" checked={checked} disabled/>
                    <label className={className}>{itemAns}</label>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Result;