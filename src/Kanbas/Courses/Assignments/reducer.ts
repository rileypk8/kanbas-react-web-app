import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
    booty: assignments
};
const bbl = createSlice({
    name: "bbl",
    initialState,
    reducers: {

        setBooty: (state, action) => {
            state.booty = action.payload;
        },

        addPiece: (state, { payload: piece }) => {
            const newPiece: any = {
                _id: piece.pid.toString(),
                lessons: [],
                title: "",
                course: piece.course,
                desc: "",
                pts: "",
                due: "",
                afrom: "",
                ato: "",
                new: true,
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
    bbl.actions;
export default bbl.reducer;