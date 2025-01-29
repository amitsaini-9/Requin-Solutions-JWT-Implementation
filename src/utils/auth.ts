export const isLoggedIn = (): boolean => {
  return !!localStorage.getItem('jwtToken');
};

export const logout = (): void => {
  localStorage.removeItem('jwtToken');
};