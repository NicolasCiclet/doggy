/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve la recette voulue dans la liste des recettes
 * @param {Array} users - toutes les recettes
 * @param {string} searchedId - le slug de la recette recherchée
 * @return {Object} - La recette trouvée
 */
export function findUser(users, searchedId) {
  const user = users.find((testedUser) => {
    return testedUser.id == searchedId;
  });
  return user;
}
