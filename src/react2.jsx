import styled from 'styled-components'

const StyledDiv = styled.div`
  background-color: green;
  width:  ${(props) => props.percent}%;
  height: 100%;
  border-radius: 5px;
`;
const MyProgress = styled.div`
  background-color:lightgrey;
  width: 100%;
  height: 20px;
  border-radius: 5px;
`;

const ProgressBar = ({ percent = 150 }) => {

    let cappedPresent = Math.min(percent, 100)

    return (
        <MyProgress data-testid="wrapper">
            <StyledDiv percent={cappedPresent} data-testid="progress" />
        </MyProgress>
    );
};

export default ProgressBar;


// Progress Bar
// Create a component called ProgressBar displays a progress bar.The progress bar should have the following styling applied:

// A width of 100 %
//     A height of 20px
// A border radius of 5px
// The completed bit should be green
// The remaining bit should be lightgrey
// The component should accept a percent prop which is used to determine how many percents of the progress bar to fill with green colour.

// We have already written some code for you.
// Directions
// Do not edit the data-testid attributes
// You can use styled-components library to achieve the desired result

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import ProgressBar from './App.js';

afterEach(cleanup);

describe('App component tests', () => {
    test("renders a ProgressBar component", () => {
        const { getByTestId } = render(<ProgressBar />);
        const wrapper = getByTestId("wrapper");
        expect(wrapper).toBeInTheDocument();
    });

    test("renders with a height of 20px", () => {
        const { getByTestId } = render(<ProgressBar />);
        const wrapper = getByTestId("wrapper");
        expect(wrapper).toHaveStyle("height: 20px");
    });

    test("renders with a border radius of 5px", () => {
        const { getByTestId } = render(<ProgressBar />);
        const wrapper = getByTestId("wrapper");
        expect(wrapper).toHaveStyle("border-radius: 5px");
    });

    test("renders the remaining part of the bar with lightgrey background color", () => {
        const { getByTestId } = render(<ProgressBar />);
        const wrapper = getByTestId("wrapper");
        expect(wrapper).toHaveStyle("background-color: lightgrey");
    });

    test("renders the filled part of the bar with green background color", () => {
        const { getByTestId } = render(<ProgressBar />);
        const progress = getByTestId("progress");
        expect(progress).toHaveStyle("background-color: green");
    });
    test("renders the filled part of the bar with a border radius of 5px", () => {
        const { getByTestId } = render(<ProgressBar />);
        const progress = getByTestId("progress");
        expect(progress).toHaveStyle("border-radius: 5px");
    });

    test("renders the filled part of the bar with the correct width", () => {
        const { getByTestId } = render(<ProgressBar percent={50} />);
        const progress = getByTestId("progress");
        expect(progress).toHaveStyle("width: 50%");
    });

    test("renders the filled part of the bar with the correct width when percent is greater than 100", () => {
        const { getByTestId } = render(<ProgressBar percent={150} />);
        const progress = getByTestId("progress");
        expect(progress).toHaveStyle("width: 100%");
    });
});