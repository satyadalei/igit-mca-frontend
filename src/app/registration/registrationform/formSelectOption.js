// these variables are going to used for selecting different options in Menu Item  of form
const districts = [
    'Angul', 'Balangir', 'Bargarh', 'Deogarh', 'Dhenkanal', 'Jharsuguda',
    'Kendujhar', 'Sambalpur', 'Subarnapur (Sonepur)', 'Sundargarh', 'Balasore', 'Bhadrak',
    'Cuttack', 'Jagatsinghpur', 'Jajpur', 'Kendrapada', 'Khordha', 'Mayurbhanj',
    'Nayagarh', 'Puri', 'Boudh', 'Gajapati', 'Ganjam', 'Kalahandi', 'Kandhamal',
    'Koraput', 'Malkangiri', 'Nabarangpur', 'Nuapada', 'Rayagada',
  ];

  const sortedDistricts = districts.sort();
  const bachelorCourses = [
    "B.Sc(Physics)",
    "B.Sc(Chemistry)",
    "B.Sc(Mathematics)",
    "B.Sc(Statistics)",
    "B.Sc(Computer Science)",
    "B.Sc(Geology)",
    "B.Sc(Zoology)",
    "B.Sc(Botany)",
    "B.Sc(Information Technology Management)",
    "B.Sc(Information Science & Telecommunication )",
    "B.Arts",
    "BCA",
    "other"
  ].sort();

  
  const fieldOfInterest = [
    "Data Analytics",
    "Advanced Business Application Programming",
    "Systems Applications and Products",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Full-Stack Web Dev",
    "App Development(IOS)",
    "App Development(Android)",
    "Cloud Computing",
    "Internet of Things",
    "Cyber Security",
    "UI/UX Designer",
    "other"
  ].sort()

  const assignedTag = [
    "CR/BR",
    "Student Secretary",
    "Cultural Secretary",
    "Mycomp Secretary",
    "Placement Secretary",
    "Fund Secretary",
    "Sports Secretary",
    "Library Secretary",
  ].sort()

export {sortedDistricts,fieldOfInterest,bachelorCourses,assignedTag};