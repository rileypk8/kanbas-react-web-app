import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    booty: [],
};
const bootySlice = createSlice({
    name: "booty",
    initialState,
    reducers: {

        setBooty: (state, action) => {
            state.booty = action.payload;
        },

        addPiece: (state, { payload: piece }) => {
            const newPiece: any = {
                _id: new Date().getTime().toString(),
                lessons: [],
                name: piece.name,
                course: piece.course,
            };
            state.booty = [...state.booty, newPiece] as any;
        },
        deletePiece: (state, { payload: pieceId }) => {
            state.booty = state.booty.filter(
                (m: any) => m._id !== pieceId);
        },
        updatePiece: (state, { payload: piece }) => {
            state.booty = state.booty.map((m: any) =>
                m._id === piece._id ? piece : m
            ) as any;
        },
        editPiece: (state, { payload: pieceId }) => {
            state.booty = state.booty.map((m: any) =>
                m._id === pieceId ? { ...m, editing: true } : m
            ) as any;
        },
    },
});
export const { addPiece, deletePiece, updatePiece, editPiece, setBooty } =
    bootySlice.actions;
export default bootySlice.reducer;