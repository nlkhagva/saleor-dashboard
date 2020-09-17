export const getUshopStatus = status => {
  const MESSAGE = {
    ATMGL: "Монголд ирсэн",
    ATUK: "оффисд ирсэн",
    NEW: "шинэ",
    RECEIVED: "Хэрэглэгч авсан",
    SHIPPING: "Тээвэрт орсон"
  };
  if (!MESSAGE[status]) {
    return "FAIL";
  }

  return MESSAGE[status];
};
