declare module '*.scss';
declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}
declare module '*.mp4' {
    const src: string;
    export default src;
}