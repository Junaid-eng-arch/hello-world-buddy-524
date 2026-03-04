import programMlt from "@/assets/program-mlt.jpg";
import programRadiology from "@/assets/program-radiology.jpg";
import programCardiac from "@/assets/program-cardiac.jpg";
import programDialysis from "@/assets/program-dialysis.jpg";

export interface Program {
  slug: string;
  title: string;
  duration: string;
  type: string;
  image: string;
  description: string;
  details: {
    overview: string;
    eligibility: string;
    career: string[];
    subjects: string[];
  };
}

export const programs: Program[] = [
  {
    slug: "bsc-medical-laboratory-technology",
    title: "BSc Medical Laboratory Technology",
    duration: "3 Years",
    type: "BSc",
    image: programMlt,
    description: "Comprehensive training in diagnostic laboratory techniques, clinical pathology, microbiology, and biochemistry with hospital-based practicals.",
    details: {
      overview: "The BSc in Medical Laboratory Technology (MLT) program prepares students to become skilled laboratory professionals capable of performing and analyzing clinical tests. Students gain in-depth knowledge of hematology, clinical biochemistry, microbiology, histopathology, and immunology through a combination of classroom instruction and hands-on hospital training.",
      eligibility: "10+2 with Physics, Chemistry, and Biology from a recognized board with minimum 50% aggregate marks.",
      career: [
        "Medical Laboratory Technologist",
        "Lab Manager / Supervisor",
        "Quality Control Analyst",
        "Research Assistant",
        "Blood Bank Technologist",
        "Pathology Lab Technician",
      ],
      subjects: [
        "Human Anatomy & Physiology",
        "Clinical Biochemistry",
        "Microbiology",
        "Hematology & Blood Banking",
        "Histopathology & Cytology",
        "Clinical Pathology",
        "Immunology & Serology",
        "Molecular Biology Techniques",
      ],
    },
  },
  {
    slug: "bsc-radiology-imaging-technology",
    title: "BSc Radiology & Imaging Technology",
    duration: "3 Years",
    type: "BSc",
    image: programRadiology,
    description: "Learn advanced imaging techniques including X-ray, CT scan, MRI, and ultrasound with hands-on experience in multi-speciality hospitals.",
    details: {
      overview: "The BSc Radiology & Imaging Technology program equips students with the skills required to operate advanced diagnostic imaging equipment. Students gain practical experience with X-ray, CT scanning, MRI, ultrasonography, and other radiological modalities in associated multi-speciality hospitals.",
      eligibility: "10+2 with Physics, Chemistry, and Biology/Mathematics from a recognized board with minimum 50% aggregate marks.",
      career: [
        "Radiologic Technologist",
        "CT Scan Technician",
        "MRI Technologist",
        "Ultrasound Technician",
        "Radiation Therapy Technologist",
        "Imaging Centre Manager",
      ],
      subjects: [
        "Human Anatomy & Physiology",
        "Radiation Physics",
        "Radiographic Techniques",
        "CT Scan Technology",
        "MRI Technology",
        "Ultrasonography",
        "Radiation Safety & Protection",
        "Digital Imaging & PACS",
      ],
    },
  },
  {
    slug: "bsc-cardiac-care-technology",
    title: "BSc Cardiac Care Technology",
    duration: "3 Years",
    type: "BSc",
    image: programCardiac,
    description: "Specialized training in ECG, ECHO, cardiac catheterization, and critical care monitoring in partnership with leading cardiac centres.",
    details: {
      overview: "The BSc Cardiac Care Technology program offers specialized training in cardiovascular diagnostics and interventional procedures. Students learn to perform and interpret ECG, echocardiography, cardiac catheterization, and other cardiovascular assessments under expert supervision at associated cardiac centres.",
      eligibility: "10+2 with Physics, Chemistry, and Biology from a recognized board with minimum 50% aggregate marks.",
      career: [
        "Cardiac Care Technologist",
        "ECG Technician",
        "Echocardiography Technician",
        "Cath Lab Technologist",
        "Cardiac Rehab Specialist",
        "Critical Care Technician",
      ],
      subjects: [
        "Human Anatomy & Physiology",
        "Cardiovascular Anatomy",
        "Electrocardiography (ECG)",
        "Echocardiography",
        "Cardiac Catheterization",
        "Critical Care Monitoring",
        "Pharmacology for Cardiac Care",
        "Cardiac Rehabilitation",
      ],
    },
  },
  {
    slug: "bvoc-medical-laboratory-technology",
    title: "BVoc Medical Laboratory Technology",
    duration: "3 Years",
    type: "BVoc",
    image: programMlt,
    description: "Vocational program combining academic coursework with extensive on-the-job training in clinical laboratories.",
    details: {
      overview: "The BVoc in Medical Laboratory Technology is designed for students seeking a vocational pathway into healthcare diagnostics. This program emphasizes on-the-job training with industry partnerships, allowing students to earn while they learn and graduate with employment-ready skills.",
      eligibility: "10+2 from a recognized board with minimum 45% aggregate marks. Science background preferred.",
      career: [
        "Lab Technician",
        "Phlebotomist",
        "Clinical Lab Assistant",
        "Quality Assurance Associate",
        "Diagnostic Centre Technician",
        "Hospital Lab Coordinator",
      ],
      subjects: [
        "Basic Medical Sciences",
        "Clinical Biochemistry",
        "Microbiology & Parasitology",
        "Hematology",
        "Clinical Pathology",
        "Lab Management & Quality Control",
        "On-the-Job Training Modules",
        "Communication & Soft Skills",
      ],
    },
  },
  {
    slug: "bvoc-radiology-imaging-technology",
    title: "BVoc Radiology & Imaging Technology",
    duration: "3 Years",
    type: "BVoc",
    image: programRadiology,
    description: "Industry-aligned vocational training in radiological sciences with certification and employment-ready skills.",
    details: {
      overview: "This BVoc program provides industry-aligned vocational training in radiology and imaging sciences. With a strong emphasis on hands-on experience and industry certifications, graduates are prepared for immediate employment in hospitals, diagnostic centres, and imaging facilities.",
      eligibility: "10+2 from a recognized board with minimum 45% aggregate marks. Science background preferred.",
      career: [
        "X-ray Technician",
        "Imaging Assistant",
        "Diagnostic Centre Operator",
        "Radiology Department Coordinator",
        "Mobile Imaging Technician",
        "Equipment Maintenance Associate",
      ],
      subjects: [
        "Basic Radiation Physics",
        "Radiographic Positioning",
        "Dark Room Techniques",
        "CT & MRI Basics",
        "Patient Care in Radiology",
        "Radiation Protection",
        "On-the-Job Training Modules",
        "Professional Communication",
      ],
    },
  },
  {
    slug: "bvoc-dialysis-technology",
    title: "BVoc Dialysis Technology",
    duration: "3 Years",
    type: "BVoc",
    image: programDialysis,
    description: "Hands-on training in hemodialysis, peritoneal dialysis, and renal care management under expert supervision.",
    details: {
      overview: "The BVoc Dialysis Technology program trains students to become dialysis technologists skilled in performing hemodialysis, peritoneal dialysis, and managing patients with renal disorders. With growing demand for dialysis professionals, this program provides excellent career opportunities in hospitals and dialysis centres nationwide.",
      eligibility: "10+2 from a recognized board with minimum 45% aggregate marks. Science background preferred.",
      career: [
        "Dialysis Technologist",
        "Hemodialysis Technician",
        "Renal Care Coordinator",
        "Dialysis Unit Supervisor",
        "Equipment Maintenance Specialist",
        "Home Dialysis Support Technician",
      ],
      subjects: [
        "Renal Anatomy & Physiology",
        "Principles of Dialysis",
        "Hemodialysis Technology",
        "Peritoneal Dialysis",
        "Water Treatment Systems",
        "Dialysis Equipment Maintenance",
        "Patient Assessment & Care",
        "Infection Control in Dialysis",
      ],
    },
  },
];
