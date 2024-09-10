const parseContactType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;
  const isContactType = (type) => ['work', 'home', 'personal'].includes(type);

  if (isContactType(type)) return type;
};

const parseFavourite = (favourite) => {
  if (typeof favourite === 'string') {
    const lowerCaseFavourite = favourite.toLowerCase();
    if (lowerCaseFavourite === 'true') {
      return true;
    }
    if (lowerCaseFavourite === 'false') {
      return false;
    }
  }
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedContactType = parseContactType(contactType);
  const parsedFavourite = parseFavourite(isFavourite);

  return {
    contactType: parsedContactType,
    isFavourite: parsedFavourite,
  };
};
