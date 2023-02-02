/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *
 * @param {Array} users - all users
 * @param {string} searchedId - userId
 * @return {Object} - user find
 */

// This function has been created for user, but it can be used in the same way for another entity
// with this function I pass 2 arguments (the array and the id)
// I use find on array to find the user that matches with this id
export function findUser(users, searchedId) {
  const user = users.find((testedUser) => {
    // eslint-disable-next-line eqeqeq
    return testedUser.id == searchedId;
  });
  return user;
}
