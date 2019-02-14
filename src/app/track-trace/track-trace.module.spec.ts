import { TrackTraceModule } from './track-trace.module';

describe('TrackTraceModule', () => {
  let trackTraceModule: TrackTraceModule;

  beforeEach(() => {
    trackTraceModule = new TrackTraceModule();
  });

  it('should create an instance', () => {
    expect(trackTraceModule).toBeTruthy();
  });
});
