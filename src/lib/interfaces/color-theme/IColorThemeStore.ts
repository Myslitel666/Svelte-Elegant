export interface IColorThemeStore {
    action: {
        hover: string;
        selected: string;
    };
    border: {
        disabled: {
            color:  string;
            width: string;
        };
        active: {
            color: string;
            width: string;
        };
        light: {
            color: string;
        };
        elegant: {
            color:  string;
        };
        borderRadius: string;
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
    };
    surface: {
        header: {
          background: string;
        };
        box: {
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