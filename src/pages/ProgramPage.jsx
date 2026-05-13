import { useParams } from "react-router-dom";
import { PROGRAMS } from "../data/programsData";
import ProgramTemplate from "../components/ProgramTemplate";

export default function ProgramPage() {
  const { slug } = useParams();

  const program = PROGRAMS[slug];

  if (!program) {
    return (
      <div
        style={{
          padding: "80px",
          textAlign: "center",
        }}
      >
        <h1>Programa no encontrado</h1>
      </div>
    );
  }

  return (
    <ProgramTemplate
      data={program}
    />
  );
}