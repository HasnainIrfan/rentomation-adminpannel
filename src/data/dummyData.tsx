// Types
import React from 'react';
import { RadioOptionTypes, SelectBoxOption, SelectOption, SidebarItems } from './types';

// Icons

import { People, StatusUp, HomeHashtag, Warning2 } from 'iconsax-react';
import { LINKS } from './links';

export const DummySelectOptions: SelectOption[] = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

export const SidebarLinks: SidebarItems[] = [
  {
    title: 'dashboard',
    href: LINKS.DASHBOARD,
    icon: <StatusUp size="21" />,
  },
  {
    title: 'Users',
    href: LINKS.USER,
    icon: <People size="21" />,
  },
  {
    title: 'Properties',
    href: LINKS.PROPERTIES,
    icon: <HomeHashtag size="21" />,
  },
  {
    title: 'Complaints',
    href: LINKS.COMPLAINT,
    icon: <Warning2 size="21" />,
  },
];

export const RadioOption: RadioOptionTypes[] = [
  {
    label: 'Yes',
    value: true,
  },
  {
    label: 'No',
    value: false,
  },
];

export const isVerifiedOption: RadioOptionTypes[] = [
  {
    label: 'True',
    value: true,
  },
  {
    label: 'False',
    value: false,
  },
];

export const StatusOptions: SelectBoxOption[] = [
  {
    label: 'Reserved',
    value: 'reserved',
  },
  {
    label: 'Booked',
    value: 'booked',
  },
  {
    label: 'Cancelled',
    value: 'cancelled',
  },
];

export const isDoctorVerifiedOption: RadioOptionTypes[] = [
  {
    label: 'True',
    value: 'true',
  },
  {
    label: 'False',
    value: 'false',
  },
  {
    label: 'Pending',
    value: 'pending',
  },
];

export const genderOptions: SelectBoxOption[] = [
  {
    label: 'Male',
    value: 'male',
  },
  {
    label: 'Female',
    value: 'female',
  },
];

export const Role = [
  { label: 'Admin', value: 'admin' },
  { label: 'Doctor', value: 'doctor' },
  { label: 'Patient', value: 'patient' },
];

export const PakistanLocations = [
  {
    city: 'Karachi',
    areas: [
      { name: 'Gulshan-e-Iqbal', lat: 24.926294, lng: 67.022095 },
      { name: 'Defense', lat: 24.827884, lng: 67.068041 },
      { name: 'Clifton', lat: 24.810365, lng: 67.031128 },
      { name: 'Korangi', lat: 24.844606, lng: 67.130858 },
      { name: 'Malir', lat: 24.894933, lng: 67.204619 },
      { name: 'North Nazimabad', lat: 24.915498, lng: 67.033176 },
      { name: 'PECHS', lat: 24.873283, lng: 67.064496 },
      { name: 'Lyari', lat: 24.861462, lng: 66.990987 },
      { name: 'Orangi Town', lat: 24.95394, lng: 66.991776 },
      { name: 'Saddar', lat: 24.853894, lng: 67.02148 },
      { name: 'Landhi', lat: 24.84446, lng: 67.16865 },
    ],
  },
  {
    city: 'Lahore',
    areas: [
      { name: 'DHA Lahore', lat: 31.469671, lng: 74.412929 },
      { name: 'Bahria Town', lat: 31.390367, lng: 74.185582 },
      { name: 'Gulberg', lat: 31.52037, lng: 74.358747 },
      { name: 'Model Town', lat: 31.47723, lng: 74.316193 },
      { name: 'Faisal Town', lat: 31.490612, lng: 74.342726 },
      { name: 'Johar Town', lat: 31.46362, lng: 74.289654 },
      { name: 'Samanabad', lat: 31.554606, lng: 74.305353 },
      { name: 'Iqbal Town', lat: 31.506037, lng: 74.289581 },
      { name: 'Garden Town', lat: 31.508799, lng: 74.338581 },
      { name: 'Shahdara', lat: 31.606989, lng: 74.304889 },
    ],
  },
  {
    city: 'Islamabad',
    areas: [
      { name: 'G-5', lat: 33.715, lng: 73.05532 },
      { name: 'G-6', lat: 33.709957, lng: 73.060488 },
      { name: 'G-7', lat: 33.697831, lng: 73.064095 },
      { name: 'G-8', lat: 33.685441, lng: 73.055328 },
      { name: 'G-9', lat: 33.676631, lng: 73.028619 },
      { name: 'G-10', lat: 33.682336, lng: 73.018545 },
      { name: 'G-11', lat: 33.672421, lng: 73.013856 },
      { name: 'G-12', lat: 33.658964, lng: 72.9893 },
      { name: 'G-13', lat: 33.64931, lng: 72.974637 },
      { name: 'G-14', lat: 33.64162, lng: 72.96598 },
      { name: 'F-5', lat: 33.73031, lng: 73.0857 },
      { name: 'F-6', lat: 33.73423, lng: 73.07094 },
      { name: 'F-7', lat: 33.729511, lng: 73.060122 },
      { name: 'F-8', lat: 33.68523, lng: 73.0488 },
      { name: 'F-9', lat: 33.68455, lng: 73.035898 },
      { name: 'F-10', lat: 33.682029, lng: 73.032669 },
      { name: 'F-11', lat: 33.677883, lng: 73.016244 },
    ],
  },
  {
    city: 'Rawalpindi',
    areas: [
      { name: 'Bahria Town Rawalpindi', lat: 33.57034, lng: 73.123443 },
      { name: 'Cantt', lat: 33.605829, lng: 73.043747 },
      { name: 'Saddar', lat: 33.593856, lng: 73.067619 },
      { name: 'Satellite Town', lat: 33.632446, lng: 73.078885 },
      { name: 'Peshawar Road', lat: 33.625247, lng: 73.039967 },
      { name: 'Chaklala Scheme 3', lat: 33.586033, lng: 73.096924 },
      { name: 'Westridge', lat: 33.579834, lng: 72.978647 },
      { name: 'Kacheri', lat: 33.616705, lng: 73.084785 },
      { name: 'Adiala Road', lat: 33.533648, lng: 73.123451 },
      { name: 'DHA Rawalpindi', lat: 33.537738, lng: 73.164155 },
    ],
  },
  {
    city: 'Peshawar',
    areas: [
      { name: 'Hayatabad', lat: 33.972596, lng: 71.430507 },
      { name: 'University Town', lat: 34.012785, lng: 71.52492 },
      { name: 'Gulbahar', lat: 34.00488, lng: 71.545112 },
      { name: 'Yakatoot', lat: 34.014123, lng: 71.582527 },
      { name: 'Cantt', lat: 33.9849, lng: 71.519425 },
      { name: 'Warsak Road', lat: 33.999211, lng: 71.486631 },
      { name: 'Ring Road', lat: 33.991214, lng: 71.463875 },
      { name: 'Kohat Road', lat: 33.978342, lng: 71.442013 },
      { name: 'Old City Area', lat: 34.01588, lng: 71.573113 },
    ],
  },
  {
    city: 'Quetta',
    areas: [
      { name: 'Cantt', lat: 30.209459, lng: 67.018173 },
      { name: 'City Center', lat: 30.179319, lng: 67.001635 },
      { name: 'Airport Road', lat: 30.251396, lng: 66.937026 },
      { name: 'Sariab Road', lat: 30.202103, lng: 67.009439 },
      { name: 'Baleli', lat: 30.220838, lng: 67.02565 },
      { name: 'Satellite Town', lat: 30.190998, lng: 67.009439 },
      { name: 'Kakar Town', lat: 30.19955, lng: 67.018365 },
      { name: 'Hazara Town', lat: 30.209557, lng: 67.028122 },
      { name: 'Brewery Road', lat: 30.196721, lng: 66.994198 },
    ],
  },
  {
    city: 'Multan',
    areas: [
      { name: 'Cantt', lat: 30.2, lng: 71.4551 },
      { name: 'Shah Rukn-e-Alam', lat: 30.1956, lng: 71.4752 },
      { name: 'Gulgasht Colony', lat: 30.2112, lng: 71.4789 },
      { name: 'New Multan', lat: 30.1804, lng: 71.4927 },
      { name: 'Bosan Road', lat: 30.2078, lng: 71.4701 },
      { name: 'Mumtazabad', lat: 30.1615, lng: 71.5267 },
      { name: 'Vehari Road', lat: 30.1562, lng: 71.5248 },
      { name: 'Khanewal Road', lat: 30.2295, lng: 71.4856 },
      { name: 'Shujabad', lat: 30.2301, lng: 71.4773 },
    ],
  },
  {
    city: 'Faisalabad',
    areas: [
      { name: 'Peoples Colony', lat: 31.4241, lng: 73.0833 },
      { name: 'Madina Town', lat: 31.4339, lng: 73.1347 },
      { name: 'Millat Town', lat: 31.4502, lng: 73.1258 },
      { name: 'Ghulam Muhammad Abad', lat: 31.4586, lng: 73.1128 },
      { name: 'Jaranwala Road', lat: 31.4364, lng: 73.1099 },
      { name: 'Canal Road', lat: 31.4225, lng: 73.0928 },
      { name: 'Tech Town', lat: 31.3997, lng: 73.1081 },
      { name: 'Dijkot Road', lat: 31.4108, lng: 73.1152 },
      { name: 'Samanabad', lat: 31.4169, lng: 73.1234 },
    ],
  },
];

export const waitTimeData = [
  {
    label: '15 - 30 mins',
    value: '15 - 30 mins',
  },
  {
    label: '30 - 45 mins',
    value: '30 - 45 mins',
  },
  {
    label: '45 - 60 mins',
    value: '45 - 60 mins',
  },
  {
    label: '60 - 75 mins',
    value: '60 - 75 mins',
  },
  {
    label: '75 - 90 mins',
    value: '75 - 90 mins',
  },
  {
    label: '90 - 105 mins',
    value: '90 - 105 mins',
  },
  {
    label: '105 - 120 mins',
    value: '105 - 120 mins',
  },
];

export const SpecializationOptions = [
  {
    label: 'Musulo Skeletal',
    value: 'Musulo-skeletal',
  },
  {
    label: 'Physiotherapy',
    value: 'physiotherapy',
  },
  {
    label: 'Orthopaedic Physiotherapy',
    value: 'Orthopaedic-Physiotherapy',
  },
  {
    label: 'Sports Physiotherapy',
    value: 'Sports-Physiotherapy',
  },
];

export const servidesData = [
  {
    label: 'Consultation',
    value: 'consultation',
  },
  {
    label: 'Diagnostic Imaging',
    value: 'diagnostic-imaging',
  },
  {
    label: 'Laboratory Services',
    value: 'laboratory-services',
  },
  {
    label: 'Health Checks',
    value: 'health-checks',
  },
  {
    label: 'Physiotherapy',
    value: 'physiotherapy',
  },
  {
    label: 'Orthopaedic Physiotherapy',
    value: 'Orthopaedic-Physiotherapy',
  },
  {
    label: 'Sports Physiotherapy',
    value: 'Sports-Physiotherapy',
  },
  {
    label: 'General Physiotherapy',
    value: 'General-Physiotherapy',
  },
  {
    label: 'Rehabilitation',
    value: 'Rehabilitation',
  },
  {
    label: 'Prenatal Physiotherapy',
    value: 'Prenatal-Physiotherapy',
  },
  {
    label: 'Sports Injury Management',
    value: 'Sports-Injury-Management',
  },
];

export const EducationOptions = [
  {
    label: 'M.B.B.S',
    value: 'M.B.B.S',
  },
  {
    label: 'Aesthetic Physician (AAAM) USA',
    value: 'Aesthetic Physician (AAAM) USA',
  },
  {
    label: 'D.Derm',
    value: 'D.Derm',
  },
  {
    label: 'Dermatologist',
    value: 'Dermatologist',
  },
  {
    label: 'Cosmetologist',
    value: 'Cosmetologist',
  },
  {
    label: 'Aesthetic Physician',
    value: 'Aesthetic Physician',
  },
];
