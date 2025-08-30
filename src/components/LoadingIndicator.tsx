interface LoadingIndicatorProps {
    loadingState: string;
};

const LoadingIndicator = ({ loadingState }: LoadingIndicatorProps) => {
    return <h2>{loadingState}</h2>;
};

export default LoadingIndicator;