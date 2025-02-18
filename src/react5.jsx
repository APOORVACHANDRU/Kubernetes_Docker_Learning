import React, { useState } from 'react';
import styled from 'styled-components';

const CheckboxList = () => {
    const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: 'Dogs', checked: false },
        { id: 2, label: 'Cats', checked: false },
        { id: 3, label: 'Cows', checked: false },
        { id: 4, label: 'Deers', checked: false },
    ]);
    const toggleCheckbox = (id) => {
        setCheckboxes(checkboxes.map((checkbox) =>
            checkbox.id === id
                ? { ...checkbox, checked: !checkbox.checked }
                : checkbox
        )
        );
    };
    const handleSelectAll = () => {
        setCheckboxes(checkboxes.map((checkbox) => ({ ...checkbox, checked: true })))
    }
    return (
        <Container>
            <CheckboxContainer data-testid="checkbox-container">
                {checkboxes.map((checkbox, index) => (
                    <CheckboxLabel key={checkbox.id}>
                        <input
                            data-testid={`checkbox-${index + 1}`}
                            type="checkbox"
                            checked={checkbox.checked}
                            onChange={() => toggleCheckbox(checkbox.id)} // Deferring execution. The arrow function is like saying: "Don't do this now, but save it for later."
                        //The actual call happens when the user interacts with the element (e.g., clicks the checkbox).
                        //                         Here’s what happens:

                        // onChange expects a function reference: React will store this arrow function (() => toggleCheckbox(checkbox.id)) and only execute it when the onChange event is triggered (e.g., when the checkbox is clicked).

                        // Why the arrow function?

                        // The arrow function wraps the actual call to toggleCheckbox(checkbox.id).
                        // It acts as a "lazy" function, which does nothing until the checkbox is clicked. At that point, React calls the arrow function, and the arrow function calls toggleCheckbox(checkbox.id).
                        />
                        {checkbox.label}
                    </CheckboxLabel>
                ))}
            </CheckboxContainer>
            <SelectAllButton
                data-testid="button"
                onClick={handleSelectAll} //The issue:
            // Here, onChange is incorrectly used on a <button> element.

            // Buttons do not emit onChange events. The onChange event is meant for input elements, such as checkboxes, radio buttons, text inputs, etc., which can have a value that changes.
            // For buttons, the correct event to use is onClick.
            >Select All</SelectAllButton>
        </Container>
    );
};

export default CheckboxList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin: 24px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const SelectAllButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  margin-top: 24px;

  &:hover {
    opacity: 0.8;
  }
`;





Select all checkboxes
In this coding challenge your task is to finish the CheckboxList component.We have already styled it for you.Your task is to implement the functionality to both:

Select the individual checkboxes.
Select all checkboxes when the Select All button is clicked.

    Directions
You don’t need to worry about styling your application as we have already done it for you.But if you wish to update the styles, you can use styled - components, inline style or tailwindcss.
Do not edit the data - testid attributes.