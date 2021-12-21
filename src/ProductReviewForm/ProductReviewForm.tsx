import styles from './ProductReviewForm.module.scss';
import { Formik, Form, Field } from 'formik';

interface FormValues {
    fullName: string;
    email: string;
    review: string;
}

const validate = (values: FormValues) => {
    const errors = {} as FormValues;
    if (!values.fullName) {
        errors.fullName = 'Required';
    } else if (values.fullName === '11') {
        errors.fullName = '11'
    }  

    return errors;
}


export const ProductReviewForm: React.FC<{}> = () => {

    
    return (
        <Formik
            initialValues={{ fullName: '', email: '', review: ''}}
            onSubmit={(values: FormValues) => {
                console.log(values);
            }}
            validate={validate}
        >
            {({ errors, touched, isValidating, handleChange, values }) => (
                <Form>
                    <div className={styles['form-row']}>
                        <div className={styles['input-group']}>
                            { errors.fullName ? <div>{errors.fullName}</div> : <label htmlFor='fullName'>ФИО</label> }
                            <Field className={styles.input} name='fullName' id='fullName' type='text'/>
                        </div>
                        <div className={styles['input-group']}>
                            { errors.email ? <div>{errors.email}</div> : <label htmlFor='email'>E-mail</label> }
                            <Field className={styles.input} name='email' id='email' type='text'/>
                        </div>
                    </div>
                    <div className={styles['input-group']}>
                        { errors.review ? <div>{errors.review}</div> : <label htmlFor='fullName'>ФИО</label> }
                        <Field className={styles.textarea} name='review' as='textarea' id='review' type='text'/>
                    </div>
                    <button type='submit'>Submit</button>
                </Form>
            )}            
        </Formik>
    )
}