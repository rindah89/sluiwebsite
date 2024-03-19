import "./programgrid.css";
import Card, { ProgramCardProps } from "../card/Card";

type Props = {
  programs: ProgramCardProps[];
};

const ProgramGrid = ({ programs }: { programs: any[] }) => {
  return (
    <div className="grid">
      {programs.length > 0 &&
        programs.map(
          (
            program: {
              image: string;
              title: string;
              summary: string;
              _id: string;
              image1: string;
              label: string;
              desc: string;
              link: string;
            },
            index: any
          ) => {
            return (
              <Card
                key={index}
                image={
                  program.image1 ||
                  `${process.env.REACT_APP_BASE_URL}/uploads/gallery/${program?.image}`
                }
                label={program.label || program.title}
                desc={program?.desc || program.summary}
                link={program.link || `/program-details/${program._id}`}
              />
            );
          }
        )}
    </div>
  );
};

export default ProgramGrid;
