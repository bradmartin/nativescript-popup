export class Common {}

export class PopupOptions {
  height?: number;
  width?: number;
  unit?: 'dp' | 'px' | '%' = 'dp';
  backgroundColor?: string = '#fff';
  hideArrow?: boolean = false;
  elevation?: number;
  borderRadius?: number;
  outsideTouchble?: boolean = true;
  x?: number = 0;
  y?: number = 0;
}
