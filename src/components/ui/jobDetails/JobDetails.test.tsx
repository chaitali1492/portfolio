import React from 'react';
import JobDetails from './JobDetails';
import { screen, render  } from '@testing-library/react';
import { QualificationData } from '../../../mock';

const mockData = QualificationData.jobDetails[0];

describe('JobDetails' , () =>{
    test('renders jobdetails as heading',() =>{
        render(<JobDetails {...mockData} />);
        const headingElement = screen.getByText(mockData.heading);
        expect(headingElement).toBeInTheDocument();
    })

    test('renders jobdetails as subtitle',() =>{
        render(<JobDetails {...mockData} />);
        const subtitleElement = screen.getByText(mockData.subtitle);
        expect(subtitleElement).toBeInTheDocument();
    })

    test('renders jobdetails as jobTitle',() =>{
        render(<JobDetails {...mockData} />);
        const jobTitleElement = screen.getByText(mockData.jobTitle);
        expect(jobTitleElement).toBeInTheDocument();
    })

    test('renders jobdetails as jobDesc',() =>{
        render(<JobDetails {...mockData} />);
        const jobDescElement = screen.getByText(mockData.jobDesc);
        expect(jobDescElement).toBeInTheDocument();
    })
})