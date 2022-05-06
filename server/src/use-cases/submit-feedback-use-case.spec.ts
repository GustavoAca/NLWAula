import { SubmitFeedbackUseCase } from './submit-feedback-use-case';

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

  const submitfeedback  = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy}
)
describe('Submit feedback', () =>{
  it('should be able to submit a feedback', async () => {
   
    await expect(submitfeedback.execute({
      type: 'Bug',
      comment:'Example comment',
      screenshot: 'data:image/png;base64.sadadasdasddsadasdASDQWDS',

    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });



  it('should not be to submit feedback without type', async () => {
   
    await expect(submitfeedback.execute({
      type: '',
      comment:'Example comment',
      screenshot: 'data:image/png;base64.sadadasdasddsadasdASDQWDS',

    })).rejects.toThrow();
  });

  it('should not be to submit feedback without comment', async () => {
   
    await expect(submitfeedback.execute({
      type: 'Bug',
      comment:'',
      screenshot: 'data:image/png;base64.sadadasdasddsadasdASDQWDS',

    })).rejects.toThrow();
  });
  it('should not be to submit feedback with an invalid screenshot', async () => {
   
    await expect(submitfeedback.execute({
      type: 'Bug',
      comment:'SNASKDNA',
      screenshot: 'data:image/png.sadadasdasddsadasdASDQWDS',

    })).rejects.toThrow();
  });

});