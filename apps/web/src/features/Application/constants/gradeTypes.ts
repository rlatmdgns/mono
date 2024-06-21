export const GRADE_TYPES = [
  {
    label: '대학원 (박사)',
    value: '대학교 (박사)',
    dataValue: 'grade_university_phd',
    classfication: '박사',
    isCollege: false,
  },
  {
    label: '대학원 (석사)',
    value: '대학원 (석사)',
    dataValue: 'grade_university',
    classfication: '석사',
    isCollege: false,
  },
  {
    label: '대학교 (2, 3년)',
    value: '대학교 (2, 3년)',
    dataValue: 'college',
    classfication: '학사',
    isCollege: true,
  },
  {
    label: '대학교 (4년 이상)',
    value: '대학교 (4년 이상)',
    dataValue: 'university',
    classfication: '전문학사',
    isCollege: false,
  },
  {
    label: '고등학교',
    value: '고등학교',
    dataValue: 'highschool',
    isCollege: false,
  },
  {
    label: '해당없음',
    value: '해당없음',
    dataValue: '해당없음',
    isCollege: false,
  },
]
