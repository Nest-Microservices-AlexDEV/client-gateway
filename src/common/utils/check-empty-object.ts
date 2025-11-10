import { NotFoundException } from '@nestjs/common';

export function throwIfEmptyObject(
  obj: any,
  message: string = 'No se proporcionaron campos',
): void {
  if (!obj || Object.keys(obj).length === 0) {
    throw new NotFoundException(message);
  }
}
