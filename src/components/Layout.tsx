import React from 'react'
import styled from 'styled-components'
import Column from './Column'

interface ILayoutState {
    x: number;
    y: number;
    columnStyle: {
        [key: string]: any;
    };
}

const LayoutWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    &.fix .column{
        transition: all 0.4s ease-in-out;
    }
    &.grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, 1fr);
        height: 100%;
    }
`

function fixLayoutNextState(x: number, y: number, size: string): ILayoutState {
    let width, height, top, left, nextX = x, nextY = y;
    switch (size) {
        case "XL":
            width = "100%";
              height = "50%";
              top = y + "%";
              left = x + "%";
              nextY += 50;
              nextX = 0;
              break;
            case "L":
              width = "100%";
              height = "25%";
              top = y + "%";
              left = x + "%";
              nextY += 25;
              nextX = 0;
              break;
            case "SM":
              width = "50%";
              height = "25%";
              top = y + "%";
              left = x + "%";
              nextY = x === 0 ? y : y + 25;
              nextX = x === 0 ? 50 : 0;
              break;
          }
          return {
            x: nextX,
            y: nextY,
            columnStyle: {
                position: 'absolute',
                width,
                height,
                top,
                left,
            }
        }
}

function gridLayoutNextState(x: number, y: number, size: string): ILayoutState {
    let gridColumn, gridRow, nextX = x, nextY = y;
    switch (size) {
    case "XL":
        gridColumn = `${x + 1} / 5`;
        gridRow = `${y + 1} / ${y + 2 + 1}`;
        nextY += 2;
        nextX = 0;
        break;
    case "L":
        gridColumn = `${x + 1} / 5`;
        gridRow = `${y + 1} / ${y + 1 + 1}`;
        nextY += 1;
        nextX = 0;
        break;
    case "SM":
        gridColumn = `${x + 1} / ${x + 1 + 2}`;
        gridRow = `${y + 1} / ${y + 1 + 1}`;
        nextY = x === 0 ? y : y + 1;
        nextX = x === 0 ? 2 : 0;
        break;
    }

    return {
        x: nextX,
        y: nextY,
        columnStyle: {
            gridColumn,
            gridRow,
        }
    }
}

function floatLayoutNextState(x: number, y: number, size: string): ILayoutState {
    let width, height;
    switch (size) {
    case "XL":
        width = '100%';
        height = '50%';
        break;
    case "L":
        width = '100%';
        height = '25%';
        break;
    case "SM":
        width = '50%';
        height = '25%';
        break;
    }

    return {
        x,
        y,
        columnStyle: {
            float: 'left',
            width,
            height,
        }
    }
}

export default function Layout({ grid, type }: { grid: string[], type?: 'fix' | 'grid' | 'float' }) {
    let y = 0;
    let x = 0;
    let columnStyle = {}
    let nextStep: (x: number, y: number, size: string) => ILayoutState;
    switch (type) {
        case 'fix': nextStep = fixLayoutNextState; break;
        case 'grid': nextStep = gridLayoutNextState; break;
        default: nextStep = floatLayoutNextState; break;
    }
    return (
      <LayoutWrapper className={type}>
        {grid.map((col, index) => {
            ({ x, y, columnStyle } = nextStep(x, y, col));
            return (
                <Column
                    key={index}
                    style={columnStyle}
                    className="column"
                >
                    {col}
                </Column>
            );
        })}
      </LayoutWrapper>
    );
}