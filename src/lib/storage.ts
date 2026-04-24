// Lightweight localStorage helpers for user selections
const KEY = "careerpath:selection";

export type UserSelection = {
  flow?: "student" | "job";
  country?: string;
  state?: string;
  district?: string;
  stream?: string;
  role?: string;
};

export const loadSelection = (): UserSelection => {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
};

export const saveSelection = (next: Partial<UserSelection>) => {
  const current = loadSelection();
  const merged = { ...current, ...next };
  localStorage.setItem(KEY, JSON.stringify(merged));
  return merged;
};

export const clearSelection = () => localStorage.removeItem(KEY);
