import styled from "@emotion/styled";

export const TransactionHistoryTable = styled.table`
    display:table;
    width: 600px;
    margin-left:auto;
    margin-right:auto;
    margin-top: 40px;
    box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.3);
`;
export const TableThead = styled.thead`
    text-align: center;
    background-color: #6bc5c5;
`;

export const TableTitle = styled.th`
    vertical-align: center;
    width: calc(100%/3);
    font-size: 14px;
    font-weight: 700;
    color: #ffffff;
    padding: 10px;
    text-transform: uppercase;
`;

export const TableBody = styled.tbody`
    color: #696969;
`;
export const TableRow = styled.tr`
    :nth-of-type(even){
    background-color: #ffffff;
    }
`;
export const TableCell = styled.td`
    border: 1px solid lightgrey;
    padding: 0px;
    text-align: center;
    height: 40px;
    vertical-align: center;
    border-collapse: collapse;
`;

export const TableCellType = styled.td`
    padding-left: 70px;
    padding-right: 40px;
    text-align: left;
    border: 1px solid lightgrey;
    text-transform: capitalize;
    height: 40px;
    vertical-align: center;
    border-collapse: collapse;
`;
