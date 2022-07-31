import InterestItem from "../InterestItem";

const groupBy3 = (data) => {
  let result = [];
  for (let i = 0; i < data.length; i += 3) {
    result.push(data.slice(i, i + 3));
  }
  return result;
};

const InterestsPage = ({interests}) => {
  let groupedInterests = groupBy3(interests);

  return(
    <div>
      <h1>Interests</h1>
      <div style={{width: "90%"}}>
        {groupedInterests.map(group =>
            <div className="row pb-4">
              {group.map(interest =>
                  <div className="col-4">
                    <InterestItem
                        title={interest.title}
                        description={interest.description}
                        image={interest.image}
                        alt={interest.alt} />
                  </div>
              )}
            </div>
        )}
      </div>
    </div>
  )
}

export default InterestsPage