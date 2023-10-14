import Projects_card from "./Projects_card";
import { useGetProjectsQuery } from "../../../Redux/features/api/baseAPI";
const Projects = () => {
  // redux
  //get all projects
  const { data: projects, isLoading, isError } = useGetProjectsQuery();

  if (isLoading) {
    return (
      <span className="loading loading-spinner flex items-center mx-auto text-warning"></span>
    );
  }

  if (isError) {
    <p> Data Not found</p>;
  }

  return (
    <section className="bg-slate-600 py-12" id="projects-section">
      <div className="container mx-auto">
        <h2 className="uppercase text-3xl font-bold text-center mb-4 text-[#09CEFF]">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects?.map((project) => (
            <Projects_card key={project?._id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
