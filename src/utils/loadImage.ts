const files = import.meta.glob<string>("../assets/icons/*.svg", {});

export async function loadMultipleSvg(paths: { path: string; id: string }[]) {
  const promises = paths.map(async (path) => {
    const res = files[path.path];
    if (res) {
      const _res = (await res()) as unknown as { default: string };
      const { default: file } = _res;
      return [path.id, file];
    }
    return [];
  });
  return Object.fromEntries(await Promise.all(promises));
}

export async function loadSvg(path: string) {
  const res = files[path];
  if (res) {
      const _res = (await res()) as unknown as { default: string };
      const { default: file } = _res;
      return file
  }
  return;
}