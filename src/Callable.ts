/**
 * A class whose instances can be called like a function.
 */
export interface Callable<F extends (...args: any) => any> {
  (...args: Parameters<F>): ReturnType<F>;
}

export abstract class Callable<F extends (...args: any) => any> {
  protected abstract call(...args: Parameters<F>): ReturnType<F>;

  constructor() {
    let apply = function (...args: Parameters<F>): ReturnType<F> {
      return Object.getPrototypeOf(apply).call.apply(apply, args);
    } as any as this;

    Object.setPrototypeOf(apply, Object.getPrototypeOf(this));
    Object.getOwnPropertyNames(this).forEach((p) => {
      Object.defineProperty(apply, p, Object.getOwnPropertyDescriptor(this, p));
    });

    return apply;
  }
}
