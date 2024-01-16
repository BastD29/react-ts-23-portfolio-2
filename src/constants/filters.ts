export type FilterType = {
  key: string;
  label: string;
  selectLabel: string;
  optionsKey: keyof OptionsType;
};

export type OptionsType = {
  languages: string[];
  frameworks: string[];
  stack: string[];
  styles: string[];
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
  {
    key: "stack",
    optionsKey: "stack",
    label: "dashboard.filter.filterType.stack",
    selectLabel: "dashboard.filter.filterSelect.selectStack",
  },
  {
    key: "style",
    optionsKey: "styles",
    label: "dashboard.filter.filterType.style",
    selectLabel: "dashboard.filter.filterSelect.selectStyle",
  },
];

export { filters };
