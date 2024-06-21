export interface HighSchoolSearch {
  city: string
  school_name: string
}

export interface UniversitySearch {
  university_univ_name: string
}

export interface UniversityMajorSearch {
  university_department_name: string
  university_univ_name: string
  university_univ_own_major_category: string
}

export interface EducationSelectOption {
  label: string
  value: string
  line?: string
}
