import React, { Component } from "react";
import DoctorCard from "./DoctorCard";

const DoctorData = [
  {
    id: 1,
    name: "Dr. Anderson",
    degree: "MD, Rheumatology",
    specialization: "Pain Management",
    fees:15000,
    desc: "Dr. Anderson is a skilled rheumatologist with a focus on pain management. With a medical degree and extensive experience, Dr. Anderson is dedicated to providing effective treatment for conditions such as rheumatoid arthritis, gout, and fever.",
  },
  {
    id: 2,
    name: "Dr. Carter",
    degree: "DO, Hematology",
    specialization: "Oncology",
    fees:20000,
    desc: "Dr. Carter, a doctor of osteopathic medicine specializing in hematology and oncology, is committed to treating patients with myelofibrosis and other hematological disorders. Dr. Carter brings compassion and expertise to ensure the best possible outcomes.",
  },
  {
    id: 3,
    name: "Dr. Davis",
    degree: "MD, Oncology",
    specialization: "Melanoma",
    fees:25000,
    desc: "Dr. Davis, an oncologist with a focus on melanoma, is highly experienced in treating resistant chronic myelocytic leukemia and various carcinomas. With a medical degree, Dr. Davis aims to improve the lives of patients facing complex cancer diagnoses.",
  },
  {
    id: 4,
    name: "Dr. Harris",
    degree: "MD, Urology",
    specialization: "Urological Medicine",
    fees:30000,
    desc: "Dr. Harris is a urologist specializing in urological medicine. With extensive knowledge and a medical degree, Dr. Harris is dedicated to providing effective treatments for conditions such as urinary tract infections and related disorders.",
  },
  {
    id: 5,
    name: "Dr. Miller",
    degree: "MD, Gastroenterology",
    specialization: "Gastrointestinal Disorders",
    fees:10000,
    desc: "Dr. Miller, a gastroenterologist, is focused on treating abdominal pain and spasm. With a medical degree, Dr. Miller utilizes a combination of expertise and compassion to address gastrointestinal disorders and improve patient well-being.",
  },
  {
    id: 6,
    name: "Dr. Robinson",
    degree: "MD, Endocrinology",
    specialization: "Obesity Management",
    fees:35000,
    desc: "Dr. Robinson, an endocrinologist, specializes in obesity management. With a medical degree and a focus on semaglutide injection therapy, Dr. Robinson aims to help individuals of all ages achieve and maintain a healthy weight.",
  },
  {
    id: 7,
    name: "Dr. Taylor",
    degree: "MD, Psychiatry",
    specialization: "Mental Health",
    fees:5000,
    desc: "Dr. Taylor, a psychiatrist, is dedicated to treating mental/mood disorders. With a medical degree, Dr. Taylor brings expertise in bipolar disorder, schizophrenia, Tourette's syndrome, and autism-related conditions.",
  },
  {
    id: 8,
    name: "Dr. Walker",
    degree: "MD, Internal Medicine",
    specialization: "Obesity Treatment",
    fees:12000,
    desc: "Dr. Walker, specializing in internal medicine, uses orlistat to treat obesity. With a medical degree, Dr. Walker focuses on reducing caloric intake by inhibiting fat absorption, helping patients achieve weight management goals.",
  },
];

class Doctor extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      <div>
        {
          DoctorData.map((v) => (
            <DoctorCard dataD={v}/>
          ))
        }
      </div>
    );
  }
}

export default Doctor;
