export type stepProps = {
    stepHandler: React.Dispatch<React.SetStateAction<number>>;
};

export type progressProps = {
    stepHandler: React.Dispatch<React.SetStateAction<number>>,
    start: number,
    end: number,
    current: number
}