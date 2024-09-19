export interface ISvgIcon {
  [key: string]: JSX.Element;
}

const LandingIcons: ISvgIcon = {
  "Audio Spaces": (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.12"
        d="M9 5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12V5Z"
        fill="#6366F1"
      />
      <path
        d="M19 10V12C19 15.866 15.866 19 12 19M5 10V12C5 15.866 8.13401 19 12 19M12 19V22M8 22H16M12 15C10.3431 15 9 13.6569 9 12V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V12C15 13.6569 13.6569 15 12 15Z"
        stroke="#6366F1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "Video Meeting": (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.12"
        d="M2.6665 9.8C2.6665 8.11984 2.6665 7.27976 2.99348 6.63803C3.2811 6.07354 3.74005 5.6146 4.30453 5.32698C4.94627 5 5.78635 5 7.4665 5H12.8665C14.5467 5 15.3867 5 16.0285 5.32698C16.593 5.6146 17.0519 6.07354 17.3395 6.63803C17.6665 7.27976 17.6665 8.11984 17.6665 9.8V14.2C17.6665 15.8802 17.6665 16.7202 17.3395 17.362C17.0519 17.9265 16.593 18.3854 16.0285 18.673C15.3867 19 14.5467 19 12.8665 19H7.4665C5.78635 19 4.94627 19 4.30453 18.673C3.74005 18.3854 3.2811 17.9265 2.99348 17.362C2.6665 16.7202 2.6665 15.8802 2.6665 14.2V9.8Z"
        fill="#8B5CF6"
        stroke="#8B5CF6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.6665 8.93137C22.6665 8.32555 22.6665 8.02265 22.5467 7.88238C22.4428 7.76068 22.2868 7.69609 22.1273 7.70865C21.9434 7.72312 21.7292 7.93731 21.3008 8.36569L17.6665 12L21.3008 15.6343C21.7292 16.0627 21.9434 16.2769 22.1273 16.2914C22.2868 16.3039 22.4428 16.2393 22.5467 16.1176C22.6665 15.9774 22.6665 15.6744 22.6665 15.0686V8.93137Z"
        stroke="#8B5CF6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.6665 9.8C2.6665 8.11984 2.6665 7.27976 2.99348 6.63803C3.2811 6.07354 3.74005 5.6146 4.30453 5.32698C4.94627 5 5.78635 5 7.4665 5H12.8665C14.5467 5 15.3867 5 16.0285 5.32698C16.593 5.6146 17.0519 6.07354 17.3395 6.63803C17.6665 7.27976 17.6665 8.11984 17.6665 9.8V14.2C17.6665 15.8802 17.6665 16.7202 17.3395 17.362C17.0519 17.9265 16.593 18.3854 16.0285 18.673C15.3867 19 14.5467 19 12.8665 19H7.4665C5.78635 19 4.94627 19 4.30453 18.673C3.74005 18.3854 3.2811 17.9265 2.99348 17.362C2.6665 16.7202 2.6665 15.8802 2.6665 14.2V9.8Z"
        stroke="#8B5CF6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "Token-gated Room": (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.12"
        d="M4.3335 14.8C4.3335 13.1198 4.3335 12.2798 4.66048 11.638C4.9481 11.0735 5.40704 10.6146 5.97152 10.327C6.61326 10 7.45334 10 9.1335 10H15.5335C17.2137 10 18.0537 10 18.6955 10.327C19.26 10.6146 19.7189 11.0735 20.0065 11.638C20.3335 12.2798 20.3335 13.1198 20.3335 14.8V16.2C20.3335 17.8802 20.3335 18.7202 20.0065 19.362C19.7189 19.9265 19.26 20.3854 18.6955 20.673C18.0537 21 17.2137 21 15.5335 21H9.1335C7.45334 21 6.61326 21 5.97152 20.673C5.40704 20.3854 4.9481 19.9265 4.66048 19.362C4.3335 18.7202 4.3335 17.8802 4.3335 16.2V14.8Z"
        fill="#D946EF"
      />
      <path
        d="M17.3335 10V8C17.3335 5.23858 15.0949 3 12.3335 3C9.57207 3 7.3335 5.23858 7.3335 8V10M12.3335 14.5V16.5M9.1335 21H15.5335C17.2137 21 18.0537 21 18.6955 20.673C19.26 20.3854 19.7189 19.9265 20.0065 19.362C20.3335 18.7202 20.3335 17.8802 20.3335 16.2V14.8C20.3335 13.1198 20.3335 12.2798 20.0065 11.638C19.7189 11.0735 19.26 10.6146 18.6955 10.327C18.0537 10 17.2137 10 15.5335 10H9.1335C7.45334 10 6.61326 10 5.97152 10.327C5.40704 10.6146 4.9481 11.0735 4.66048 11.638C4.3335 12.2798 4.3335 13.1198 4.3335 14.8V16.2C4.3335 17.8802 4.3335 18.7202 4.66048 19.362C4.9481 19.9265 5.40704 20.3854 5.97152 20.673C6.61326 21 7.45334 21 9.1335 21Z"
        stroke="#D946EF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "chevron-right": (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12H20M20 12L14 6M20 12L14 18"
        stroke="#515662"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "chevron-down": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
      />
    </svg>
  ),
  terminal: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.12"
        d="M2.25 5.85C2.25 4.58988 2.25 3.95982 2.49524 3.47852C2.71095 3.05516 3.05516 2.71095 3.47852 2.49524C3.95982 2.25 4.58988 2.25 5.85 2.25H12.15C13.4101 2.25 14.0402 2.25 14.5215 2.49524C14.9448 2.71095 15.289 3.05516 15.5048 3.47852C15.75 3.95982 15.75 4.58988 15.75 5.85V12.15C15.75 13.4101 15.75 14.0402 15.5048 14.5215C15.289 14.9448 14.9448 15.289 14.5215 15.5048C14.0402 15.75 13.4101 15.75 12.15 15.75H5.85C4.58988 15.75 3.95982 15.75 3.47852 15.5048C3.05516 15.289 2.71095 14.9448 2.49524 14.5215C2.25 14.0402 2.25 13.4101 2.25 12.15V5.85Z"
        fill="#515662"
      />
      <path
        d="M5.25 11.25L7.5 9L5.25 6.75M9.75 11.25H12.75M5.85 15.75H12.15C13.4101 15.75 14.0402 15.75 14.5215 15.5048C14.9448 15.289 15.289 14.9448 15.5048 14.5215C15.75 14.0402 15.75 13.4101 15.75 12.15V5.85C15.75 4.58988 15.75 3.95982 15.5048 3.47852C15.289 3.05516 14.9448 2.71095 14.5215 2.49524C14.0402 2.25 13.4101 2.25 12.15 2.25H5.85C4.58988 2.25 3.95982 2.25 3.47852 2.49524C3.05516 2.71095 2.71095 3.05516 2.49524 3.47852C2.25 3.95982 2.25 4.58988 2.25 5.85V12.15C2.25 13.4101 2.25 14.0402 2.49524 14.5215C2.71095 14.9448 3.05516 15.289 3.47852 15.5048C3.95982 15.75 4.58988 15.75 5.85 15.75Z"
        stroke="#515662"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "chevronRight-small": (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 7H12.3333M12.3333 7L8.83333 3.5M12.3333 7L8.83333 10.5"
        stroke="#515662"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "chevron-right-btn": (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.3335 7H11.6668M11.6668 7L8.16683 3.5M11.6668 7L8.16683 10.5"
        stroke="#C9D1D9"
        strokeOpacity="0.7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "chevron-up": (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 3.75C7.08579 3.75 6.75 4.08579 6.75 4.5C6.75 4.91421 7.08579 5.25 7.5 5.25H11.6893L3.96967 12.9697C3.67678 13.2626 3.67678 13.7374 3.96967 14.0303C4.26256 14.3232 4.73744 14.3232 5.03033 14.0303L12.75 6.31066V10.5C12.75 10.9142 13.0858 11.25 13.5 11.25C13.9142 11.25 14.25 10.9142 14.25 10.5V4.5C14.25 4.08579 13.9142 3.75 13.5 3.75H7.5Z"
        fill="#515662"
      />
    </svg>
  ),
};

export default LandingIcons;
