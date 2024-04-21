export default function IconEyeOpen({
  password = false,
}: {
  // eslint-disable-next-line react/require-default-props
  password?: boolean;
}) {
  return password ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9ZM12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5Z"
        fill="#9E9E9E"
      />
    </svg>
  ) : (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.09082 5.4812C8.5881 5.4812 9.06501 5.66558 9.41665 5.99376C9.76828 6.32195 9.96582 6.76707 9.96582 7.2312C9.96582 7.69533 9.76828 8.14045 9.41665 8.46864C9.06501 8.79683 8.5881 8.9812 8.09082 8.9812C7.59354 8.9812 7.11663 8.79683 6.76499 8.46864C6.41336 8.14045 6.21582 7.69533 6.21582 7.2312C6.21582 6.76707 6.41336 6.32195 6.76499 5.99376C7.11663 5.66558 7.59354 5.4812 8.09082 5.4812ZM8.09082 2.8562C11.2158 2.8562 13.8846 4.67037 14.9658 7.2312C13.8846 9.79203 11.2158 11.6062 8.09082 11.6062C4.96582 11.6062 2.29707 9.79203 1.21582 7.2312C2.29707 4.67037 4.96582 2.8562 8.09082 2.8562ZM2.57832 7.2312C3.08348 8.19388 3.86789 9.00497 4.84237 9.57227C5.81685 10.1396 6.94232 10.4403 8.09082 10.4403C9.23932 10.4403 10.3648 10.1396 11.3393 9.57227C12.3138 9.00497 13.0982 8.19388 13.6033 7.2312C13.0982 6.26852 12.3138 5.45743 11.3393 4.89014C10.3648 4.32284 9.23932 4.0221 8.09082 4.0221C6.94232 4.0221 5.81685 4.32284 4.84237 4.89014C3.86789 5.45743 3.08348 6.26852 2.57832 7.2312Z"
        fill="#808080"
      />
    </svg>
  );
}
