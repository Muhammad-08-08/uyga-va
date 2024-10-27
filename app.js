// ? 1-misol
// const hospital = {
//   name: "City Health Center",
//   location: {
//     address: {
//       street: "123 Wellness Ave",
//       city: "Healthville",
//       state: {
//         name: "MediState",
//         code: "MS",
//       },
//       country: {
//         name: "Careland",
//         code: "CL",
//       },
//     },
//     departments: {
//       emergency: {
//         floor: 1,
//         head: "Dr. Meredith Grey",
//         facilities: {
//           beds: 50,
//           operatingRooms: 5,
//           triageUnits: 10,
//         },
//       },
//       cardiology: {
//         floor: 3,
//         head: "Dr. Cristina Yang",
//         facilities: {
//           ICU: {
//             beds: 20,
//             nurseStation: {
//               headNurse: "Nurse Jackie",
//               contact: {
//                 phone: "123-456-9999",
//                 email: "nurse.jackie@healthcenter.com",
//               },
//             },
//           },
//           regularWard: {
//             beds: 50,
//             doctorOnCall: "Dr. Derek Shepherd",
//           },
//         },
//       },
//     },
//   },
//   staff: {
//     doctors: {
//       chiefMedicalOfficer: {
//         name: "Dr. Richard Webber",
//         experience: "30 years",
//         contact: {
//           phone: "123-555-7890",
//           email: "dr.webber@healthcenter.com",
//         },
//       },
//       residentDoctors: {
//         senior: {
//           name: "Dr. Miranda Bailey",
//           specialty: "General Surgery",
//           experience: "15 years",
//         },
//         junior: {
//           name: "Dr. Alex Karev",
//           specialty: "Pediatrics",
//           experience: "5 years",
//         },
//       },
//     },
//     nurses: {
//       headNurse: "Nurse Carol Hathaway",
//       departments: {
//         emergency: {
//           head: "Nurse Peter Benton",
//           staffCount: 30,
//         },
//         cardiology: {
//           head: "Nurse Lucy Knight",
//           staffCount: 25,
//         },
//       },
//     },
//   },
// };

// let {
//   name,
//   location: {
//     address: {
//       street,
//       city,
//       state: { name: name1, code },
//       country: { name: name2, code: code2 },
//     },
//     departments: {
//       emergency: {
//         floor,
//         head,
//         facilities: { beds, operatingRooms, triageUnits },
//       },
//       cardiology: {
//         floor: floor1,
//         head: head1,
//         facilities: {
//           ICU: { 
//             beds: beds1,
//             nurseStation:{
//                 headNurse,
//                 contact:{
//                     phone,
//                     email,
//                 },
//             },
//           },
//           regularWard:{
//             beds:beds2,
//             doctorOnCall,
//           },
//         },
//       },
//     },
//   },
//   staff:{
//     doctors:{
//         chiefMedicalOfficer:{
//             name:name3,
//             experience,
//             contact:{
//                 phone:phone1,
//                 email:email1,
//             },
//         },
//         residentDoctors:{
//             senior:{
//                 name:name4,
//                 specialty,
//                 experience:experience1,
//             },
//             junior:{
//                 name:name5,
//                 specialty:specialty1,
//                 experience:experience2,
//             },
//         },
//     },
//     nurses:{
//         headNurse:headNurse1,
//         departments:{
//             emergency:{
//                 head:head2,
//                 staffCount,
//             },
//             cardiology:{
//                 head:head3,
//                 staffCount:staffCount1,
//             },
//         },
//     },
//   },
// } = hospital;
// console.log(head3);

// ? 1-misol tugadi


// ? 2-misol

// const company = {
//     name: "Global Tech Solutions",
//     headquarters: {
//       address: {
//         street: "789 Innovation Blvd",
//         city: "Tech City",
//         state: {
//           name: "Innovatia",
//           code: "IN"
//         },
//         country: {
//           name: "Technoland",
//           code: "TN"
//         }
//       },
//       offices: {
//         northAmerica: {
//           regionalHead: "Ms. Susan Clarke",
//           contact: {
//             phone: "456-789-1234",
//             email: "susan@globaltech.com"
//           },
//           departments: {
//             software: {
//               head: "Mr. John Doe",
//               teamLead: {
//                 name: "Ms. Alice Johnson",
//                 contact: {
//                   email: "alice@globaltech.com",
//                   phone: "456-123-7890"
//                 }
//               }
//             },
//             hr: {
//               head: "Mrs. Sarah Connors",
//               teamLead: {
//                 name: "Mr. Bruce Wayne",
//                 contact: {
//                   email: "bruce@globaltech.com",
//                   phone: "456-456-7899"
//                 }
//               }
//             }
//           }
//         },
//         europe: {
//           regionalHead: "Mr. Liam O'Sullivan",
//           contact: {
//             phone: "789-456-3210",
//             email: "liam@globaltech.com"
//           },
//           departments: {
//             marketing: {
//               head: "Ms. Natasha Romanoff",
//               teamLead: {
//                 name: "Mr. Steve Rogers",
//                 contact: {
//                   email: "steve@globaltech.com",
//                   phone: "123-321-4567"
//                 }
//               }
//             },
//             finance: {
//               head: "Mr. Tony Stark",
//               teamLead: {
//                 name: "Ms. Pepper Potts",
//                 contact: {
//                   email: "pepper@globaltech.com",
//                   phone: "987-654-3210"
//                 }
//               }
//             }
//           }
//         }
//       }
//     },
//     staff: {
//       CEO: {
//         name: "Mr. Elon Musk",
//         experience: "20 years",
//         contact: {
//           email: "elon@globaltech.com",
//           phone: "999-888-7777"
//         }
//       },
//       executives: {
//         CTO: {
//           name: "Ms. Sheryl Sandberg",
//           experience: "18 years",
//           contact: {
//             email: "sheryl@globaltech.com",
//             phone: "555-555-5555"
//           }
//         },
//         CFO: {
//           name: "Mr. Warren Buffett",
//           experience: "25 years",
//           contact: {
//             email: "warren@globaltech.com",
//             phone: "444-444-4444"
//           }
//         }
//       }
//     }
//   };
  

//   let {
//     name, 
//     headquarters:{
//         address:{
//             street,
//             city,
//             state:{
//                 name:name1,
//                 code,
//             },
//             country:{
//                 name:name2,
//                 code:code1,
//             },
//         },
//         offices:{
//             northAmerica:{
//                 regionalHead,
//                 contact:{
//                     phone,
//                     email,
//                 },
//                 departments:{
//                     software:{
//                         head,
//                         teamLead:{
//                             name:name3,
//                             contact:{
//                                 email:email1,
//                                 phone:phone1,
//                             },
//                         },
//                     },
//                     hr:{
//                         head:head1,
//                         teamLead:{
//                             name:name6,
//                             contact:{
//                                 email:email2,
//                                 phone:phone2,
//                             },
//                         },
//                     },
//                 },
//             },
//             europe:{
//                 regionalHead:regionalHead1,
//                 contact:{
//                     phone:phone3,
//                     email:email3,
//                 },
//                 departments:{
//                     marketing:{
//                         head:head4,
//                         teamLead:{
//                             name:name7,
//                             contact:{
//                                 email:email4,
//                                 phone:phone4,
//                             },
//                         },
//                     },
//                     finance:{
//                         head:head5,
//                         teamLead:{
//                             name:name8,
//                             contact:{
//                                 email:email5,
//                                 phone:phone5,
//                             },
//                         },
//                     },
//                 },
//             },
//         },
//     },
//     staff:{
//         CEO:{
//             name:name9,
//             experience,
//             contact:{
//                 email:email6,
//                 phone:phone6,
//             },
//         },
//         executives:{
//             CTO:{
//                 name:name10,
//                 experience:experience1,
//                 contact:{
//                     email:email7,
//                     phone:phone7,
//                 },
//             },
//             CFO:{
//                 name:name11,
//                 experience:experience2,
//                 contact:{
//                     email:email8,
//                     phone:phone8,
//                 },
//             },
//         },
//     },
//   } = company

//   console.log(email8);
  

