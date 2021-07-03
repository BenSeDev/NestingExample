import { ReactElement } from 'react';
import { useParams } from 'react-router-dom';

export default function Topic(): ReactElement {
    let { topicId } = useParams<{ topicId: string }>();

    return (
        <div>
            <h3>{topicId}</h3>
        </div>
    );
}