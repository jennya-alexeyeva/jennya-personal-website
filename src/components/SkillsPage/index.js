import StarRatings from "react-star-ratings/build/star-ratings";

const SkillsPage = ({skills}) => {
  return (
      <div>
        <h1>Skills</h1>
        {skills.map(skill =>
            <div>
              <p>{skill.name}</p>
              <StarRatings
                  rating={skill.level}
                  numberOfStars={4}
                  starRatedColor="pink"
              />
            </div>
        )}
      </div>
    )
}

export default SkillsPage