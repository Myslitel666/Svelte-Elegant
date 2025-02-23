export interface IColorThemeStore {
    border: {
        active: {
            color: string;
            width: string;
        };
        disabled: {
            color:  string;
            width: string;
        };
        focused: {
            color:  string;
        };
        elegant: {
            color:  string;
        };
        borderRadius: {
            default: string;
            balanced: string;
            extra: string;
            ultimate: string;
        }
    };
    palette: {
        primary: string;
        secondary: string;
        background: string;
        text: {
            contrast: string;
            main: string;
            label: string;
        };
    };
    controls: {
        button: {
            padding: string;
            filter: string;
        };
        textField: {
            padding: string;
        };
        height: string;
        width: string;
    };
    icon: {
        color: {
            primary: string;
        }
    };
    surface: {
        header: {
            background: string;
        };
        ghost: {
            background: string;
        };
        filled: {
            background: string;
        };
        solid: {
            background: string;
        };
    };
    table: {
        palette: {
            background: string;
            hover: string;
        };
    };
    typography: {
        font: string;
        fontUrl: string;
        fontSize: string;
        fontStyle: string;
        fontWeight: string;
        format: string;
        letterSpacing: string;
    };
    effectsTimeCode: string;
    themeMode: string;
}