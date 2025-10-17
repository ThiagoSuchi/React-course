import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
   switch (action.type) {
    case "RED":
        return { ...state, color: "#E63946" } // vermelho
    case "BLUE":
        return { ...state, color: "#1D4ED8" } // azul
    case "GREEN":
        return { ...state, color: "#16A34A" } // verde
    case "PURPLE":
        return { ...state, color: "#8B5CF6" } // roxo
    case "ORANGE":
        return { ...state, color: "#F97316" } // laranja
    case "TEAL":
        return { ...state, color: "#14B8A6" } // verde-água
    case "GRAY":
        return { ...state, color: "#6B7280" } // cinza
    case "YELLOW":
        return { ...state, color: "#FACC15" } // amarelo
    case "PINK":
        return { ...state, color: "#EC4899" } // rosa
    default:
        return state;
}
}

export const TitleColorContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(titleColorReducer, { color: "#3f3f3f" });

    console.log("Title color context: ", state);

    return (
        <TitleColorContext.Provider value={{ ...state, dispatch }}>
            {children}
        </TitleColorContext.Provider>
    )
};