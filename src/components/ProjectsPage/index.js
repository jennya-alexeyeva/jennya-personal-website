import ProjectItem from "../ProjectItem";

const ProjectsPage = ({projects}) => {
  return (
      <div>
        {projects.map(project =>
            <ProjectItem
                title={project.name}
                date={project.date}
                description={project.description}
                image={project.logo}
            />
        )}
      </div>
  )
}

export default ProjectsPage