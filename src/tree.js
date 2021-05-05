import React, { useEffect, useState } from "react";

// async function getRandomTree() {
//   return await fetch(
//     "https://data.ballarat.vic.gov.au/api/records/1.0/search/?dataset=exceptional-tree-register&q=&facet=aboriginal_association&facet=aesthetic_value&facet=curious_growth_form&facet=historical_value&facet=horticultural_value&facet=location_context&facet=outstanding_example&facet=outstanding_habitat_value&facet=outstanding_size&facet=particularly_old&facet=rare_or_localised&facet=social_cultural_spiritual&facet=diameter_breast_height&facet=species&facet=spread&facet=structural_root_zone&facet=tree_protection_zone&facet=height&facet=private&facet=council&facet=national_trust&facet=image_url"
//   )
//     .then((response) => {
//       return response.json();
//     })
//     .then((dataset) => {
//       return dataset.records[0].fields.image_url;
//     });
// }

const RandomTree = () => {
  const [randomTree, setRandomTree] = useState(null);
  const getRandomNumberUnderTen = () => Math.floor(Math.random() * 10);
  useEffect(() => {
    fetch(
      "https://data.ballarat.vic.gov.au/api/records/1.0/search/?dataset=exceptional-tree-register&q=&facet=aboriginal_association&facet=aesthetic_value&facet=curious_growth_form&facet=historical_value&facet=horticultural_value&facet=location_context&facet=outstanding_example&facet=outstanding_habitat_value&facet=outstanding_size&facet=particularly_old&facet=rare_or_localised&facet=social_cultural_spiritual&facet=diameter_breast_height&facet=species&facet=spread&facet=structural_root_zone&facet=tree_protection_zone&facet=height&facet=private&facet=council&facet=national_trust&facet=image_url"
    )
      .then((response) => {
        return response.json();
      })
      .then((dataset) => {
        setRandomTree(
          dataset.records[getRandomNumberUnderTen()].fields.image_url
        );
      });
  }, []);

  return (
    <div>
      <h6>It's a tree from Ballarat:</h6>
      {randomTree && <img height="200" width="200" src={randomTree} />}
    </div>
  );
};

export default RandomTree;
