import { DependencyList, EffectCallback } from 'react';
type DepsEqualFnType<TDeps extends DependencyList> = (prevDeps: TDeps, nextDeps: TDeps) => boolean;
export declare const useCustomCompareEffect: <TDeps extends DependencyList>(effect: EffectCallback, deps: TDeps, depsEqual: DepsEqualFnType<TDeps>) => void;
export {};
