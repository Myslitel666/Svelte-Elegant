export interface IColorThemeStore {
    action: {
        hover: string;
        selected: string;
    };
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
        table: {
            color: string;
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
    colors: {
        primary: string;
        secondary: string;
        background: string;
        text: {
            primary: string;
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
    disabled: {
        expressed: string;
        fill: string;
        touch: string;
        elegant: string;
    };
    surface: {
        header: {
          background: string;
        };
        hoverable: {
            background: string;
        };
        solid: {
            background: string;
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