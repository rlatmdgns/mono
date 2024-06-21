export const getInputPadding = ($stateIcon?: string | null, $isEye?: boolean) => {
  if ($stateIcon && $isEye) return '22px 76px 6px 44px';
  if ($stateIcon) return '22px 40px 6px 44px';
  return '22px 16px 6px 44px';
};