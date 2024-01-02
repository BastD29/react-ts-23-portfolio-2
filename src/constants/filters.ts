export type FilterType = {
  key: string;
  label: string;
  selectLabel: string;
  optionsKey: keyof OptionsType;
};

export type OptionsType = {
  languages: string[];
  frameworks: string[];
};

const filters: FilterType[] = [
  {
    key: "language",
    optionsKey: "languages",
    label: "dashboard.filter.filterType.language",
    selectLabel: "dashboard.filter.filterSelect.selectLanguage",
  },
  {
    key: "framework",
    optionsKey: "frameworks",
    label: "dashboard.filter.filterType.framework",
    selectLabel: "dashboard.filter.filterSelect.selectFramework",
  },
];

export { filters };
