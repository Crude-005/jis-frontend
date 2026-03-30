export function getUser() {
  if (typeof window === "undefined") return null;

  const userId = localStorage.getItem("userId");
  const role = localStorage.getItem("role");

  if (!userId || !role) return null;

  return { userId, role };
}

export function logout() {
  localStorage.clear();
  window.location.href = "/login";
}
