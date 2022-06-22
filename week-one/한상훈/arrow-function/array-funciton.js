export function joinNamesToFullName({ name, surname, id }) {
  return { fullName: `${name} ${surname}`, id };
}

export function groupById(users) {
  const result = users.reduce((acc, curr) => {
    const { id } = curr;
    acc[id] = { ...curr };
    return acc;
  }, {});
  return result;
}
