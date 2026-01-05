import { useParams } from "react-router-dom";

const CoursesDetail = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>
        <span className="uppercase">{params.courseId}</span> Course Details
      </h1>
    </div>
  );
};

export default CoursesDetail;
